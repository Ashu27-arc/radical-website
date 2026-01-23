"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Earth3D() {
  const containerRef = useRef(null);
  const initializedRef = useRef(false); // ✅ prevent duplicate labels in Next.js

  useEffect(() => {
    if (!containerRef.current || initializedRef.current) return;
    initializedRef.current = true;

    const container = containerRef.current;

    /* Scene */
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    container.appendChild(renderer.domElement);

    function resizeRenderer() {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }
    resizeRenderer();

    /* Lights */
    scene.add(new THREE.AmbientLight(0xffffff, 1));
    const light = new THREE.DirectionalLight(0xffffff, 0.8);
    light.position.set(5, 3, 5);
    scene.add(light);

    /* Earth */
    const earthTexture = new THREE.TextureLoader().load("/images/worldMap.webp");

    const earth = new THREE.Mesh(
      new THREE.SphereGeometry(1, 64, 64),
      new THREE.MeshPhongMaterial({ map: earthTexture })
    );
    scene.add(earth);

    /* Lat/Lon → Vector */
    function latLon(lat, lon, radius = 1) {
      const phi = ((90 - lat) * Math.PI) / 180;
      const theta = ((lon + 180) * Math.PI) / 180;
      return new THREE.Vector3(
        -(radius * Math.sin(phi) * Math.cos(theta)),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    }

    /* Pin Marker + MAP ICON */
    const iconTexture = new THREE.TextureLoader().load("/images/mapIcon.svg");

    function createPin(position) {
      const group = new THREE.Group();

      const head = new THREE.Mesh(
        new THREE.SphereGeometry(0.035, 16, 16),
        new THREE.MeshBasicMaterial({ color: 0xff3b3b })
      );

      const stem = new THREE.Mesh(
        new THREE.CylinderGeometry(0.01, 0.01, 0.08, 8),
        new THREE.MeshBasicMaterial({ color: 0xff3b3b })
      );
      stem.position.y = -0.06;

      const iconMaterial = new THREE.SpriteMaterial({
        map: iconTexture,
        transparent: true,
      });
      const icon = new THREE.Sprite(iconMaterial);
      icon.scale.set(0.1, 0.1, 1);
      icon.position.y = 0.1;

      group.add(head);
      group.add(stem);
      group.add(icon);

      group.position.copy(position.clone().normalize().multiplyScalar(1.02));
      group.lookAt(position.clone().multiplyScalar(2));

      return group;
    }

    /* Countries */
    const countries = [
      { name: "Russia", lat: 61, lon: 105, colleges: 120, flag: "/images/ru.webp" },
      { name: "Georgia", lat: 42, lon: 43, colleges: 18, flag: "/images/ge.webp" },
      { name: "Uzbekistan", lat: 41, lon: 64, colleges: 35, flag: "/images/uz.webp" },
      { name: "Singapore", lat: 1.3, lon: 103.8, colleges: 22, flag: "/images/sg.webp" },
    ];

    const labels = [];

    countries.forEach((c) => {
      const pos = latLon(c.lat, c.lon);
      const pin = createPin(pos);
      earth.add(pin);

      const label = document.createElement("div");
      label.className = "label";
      label.innerHTML = `
        <div class="country">
          <div><img src="${c.flag}" /></div>
          <div>
            <div class="cName">${c.name}</div>
            <div class="college">Colleges: ${c.colleges}</div>
          </div>
        </div>
      `;
      container.appendChild(label);

      labels.push({ label, pin });
    });

    /* Start from Russia */
    earth.rotation.y = (-105 * Math.PI) / 180;

    /* Auto rotate & drag */
    let autoRotateSpeed = 0.002;
    let isDragging = false;
    let lastX = 0;
    let rotationVelocity = 0;

    function startDrag(x) {
      isDragging = true;
      lastX = x;
    }

    function drag(x) {
      if (!isDragging) return;
      const delta = x - lastX;
      rotationVelocity = delta * 0.005;
      earth.rotation.y += rotationVelocity;
      lastX = x;
    }

    function endDrag() {
      isDragging = false;
    }

    const dom = renderer.domElement;

    dom.addEventListener("mousedown", (e) => startDrag(e.clientX));
    dom.addEventListener("mousemove", (e) => drag(e.clientX));
    dom.addEventListener("mouseup", endDrag);
    dom.addEventListener("mouseleave", endDrag);

    dom.addEventListener("touchstart", (e) => startDrag(e.touches[0].clientX));
    dom.addEventListener("touchmove", (e) => drag(e.touches[0].clientX));
    dom.addEventListener("touchend", endDrag);

    /* Cursor */
    dom.style.cursor = "grab";
    dom.addEventListener("mousedown", () => (dom.style.cursor = "grabbing"));
    dom.addEventListener("mouseup", () => (dom.style.cursor = "grab"));
    dom.addEventListener("mouseleave", () => (dom.style.cursor = "grab"));

    /* Animate */
    function animate() {
      requestAnimationFrame(animate);

      if (!isDragging) {
        earth.rotation.y += autoRotateSpeed;
        rotationVelocity *= 0.95;
        earth.rotation.y += rotationVelocity;
      }

      labels.forEach((l) => {
        const worldPos = new THREE.Vector3();
        l.pin.getWorldPosition(worldPos);

        const cameraDir = camera.position.clone().normalize();
        const markerDir = worldPos.clone().normalize();
        const visible = markerDir.dot(cameraDir) > 0;

        if (visible) {
          const screenPos = worldPos.project(camera);
          l.label.style.display = "block";
          l.label.style.left =
            (screenPos.x * 0.5 + 0.5) * container.clientWidth + "px";
          l.label.style.top =
            (-screenPos.y * 0.5 + 0.5) * container.clientHeight + "px";
        } else {
          l.label.style.display = "none";
        }
      });

      renderer.render(scene, camera);
    }
    animate();

    /* Resize */
    window.addEventListener("resize", resizeRenderer);

    /* Cleanup */
    return () => {
      window.removeEventListener("resize", resizeRenderer);
      labels.forEach((l) => l.label.remove());
      renderer.dispose();
      dom.remove();
      initializedRef.current = false;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="glob3d h-[50vh]! md:h-[100vh]!"
      style={{ width: "100%", position: "relative" }}
    />
  );
}
