'use client';

import { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Skeleton } from 'primereact/skeleton';

export default function GalleryModal({
    visible,
    events,
    onHide,
}: {
    visible: boolean;
    events: any[];
    onHide: () => void;
}) {

    const ImageWithSkeleton = ({
        src,
        className,
    }: {
        src: string;
        className: string;
    }) => {
        const [loaded, setLoaded] = useState(false);

        return (
            <div className="relative w-full h-full">
                {!loaded && (
                    <Skeleton
                        width="100%"
                        height="100%"
                        borderRadius="0.5rem"
                        className="absolute inset-0"
                    />
                )}
                <img
                    src={src}
                    onLoad={() => setLoaded(true)}
                    className={`${className} ${loaded ? 'block' : 'hidden'}`}
                    alt=""
                />
            </div>
        );
    };

    return (
        <Dialog
            visible={visible}
            onHide={onHide}
            dismissableMask
            style={{ width: '72vw' }}
            className="gallery-modal"
            header={null}
        >
            <div className="space-y-8">

                {events.map((event, index) => (
                    <div key={index}>
                        <h3 className="text-center font-semibold text-[#005A8B] mb-6">
                            {event.title} – {event.date}
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="col-span-2 row-span-2 pb-4">
                                <ImageWithSkeleton
                                    src={event.images[0]}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                            <div className="grid grid-cols-1 gap-4">
                                <ImageWithSkeleton
                                    src={event.images[1]}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <ImageWithSkeleton
                                    src={event.images[2]}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                            {event.images.slice(3, 7).map((img: string, i: number) => (
                                <ImageWithSkeleton
                                    key={i}
                                    src={img}
                                    className="h-32 w-full object-cover rounded-lg"
                                />
                            ))}
                        </div>
                    </div>
                ))}

            </div>
        </Dialog>
    );
}

