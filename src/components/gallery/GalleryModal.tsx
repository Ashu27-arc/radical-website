'use client';

import { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Skeleton } from 'primereact/skeleton';
import Image from 'next/image';

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
            <div className="relative w-full h-full min-h-[100px]">
                {!loaded && (
                    <Skeleton
                        width="100%"
                        height="100%"
                        borderRadius="0.5rem"
                        className="absolute inset-0"
                    />
                )}
                <Image
                    src={src}
                    fill
                    onLoad={() => setLoaded(true)}
                    className={`${className} transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                    alt=""
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
        );
    };

    return (
        <Dialog
            visible={visible}
            onHide={onHide}
            dismissableMask
            style={{ width: 'fit-content', maxWidth: '95vw', maxHeight: '95vh' }}
            className="gallery-modal"
            header={null}
            contentClassName="p-0 overflow-hidden rounded-xl"
            contentStyle={{ overflow: 'hidden' }}
        >
            <div className="bg-white overflow-hidden">
                {events && events.length > 0 && (
                    <div className="flex flex-col overflow-hidden">
                        <div className="p-4 md:p-5 text-center border-b border-gray-100 bg-white">
                            <h3 className="text-lg font-semibold text-[#005A8B]">
                                {events[0].title} {events[0].date && `– ${events[0].date}`}
                            </h3>
                        </div>

                        <div className="relative flex justify-center items-center bg-gray-50/30 overflow-hidden">
                            {events[0].images && events[0].images[0] && (
                                <div className="relative max-h-[75vh] flex justify-center overflow-hidden">
                                    <Image
                                        src={events[0].images[0]}
                                        alt={events[0].title}
                                        width={1600}
                                        height={1200}
                                        className="w-auto h-auto max-w-full max-h-[70vh] object-contain block shadow-2xl"
                                        priority
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </Dialog>
    );
}

