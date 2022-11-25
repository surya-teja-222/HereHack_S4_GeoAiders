// src/DisplayMapClass.js
import * as React from "react";
const HERE_API_KEY = import.meta.env.VITE_HERE_API_KEY;


export default function DisplayMap() {
    const mapRef = React.useRef(null);
    const [map, setMap] = React.useState(null);
    React.useEffect(() => {
        function setInteractive(map: {
            getBaseLayer: () => {
                (): any;
                new (): any;
                getProvider: { (): any; new (): any };
            };
        }) {
            var provider = map.getBaseLayer().getProvider();
            var style = provider.getStyle();

            var changeListener = (evt: any) => {
                if (style.getState() === H.map.Style.State.READY) {
                    style.removeEventListener("change", changeListener);
                    style.setInteractive(
                        ["places", "places.populated-places"],
                        true
                    );
                    provider.addEventListener("tap", onTap);
                }
            };
            style.addEventListener("change", changeListener);
        }

        // @ts-ignore
        const H = window.H;
        const platform = new H.service.Platform({
            apikey: HERE_API_KEY,
        });
        const defaultLayers = platform.createDefaultLayers();
        const map = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
            center: { lat: 25.6139, lng: 80.209 },
            zoom: 6,
            pixelRatio: window.devicePixelRatio || 1,
        });
        window.addEventListener("resize", () => map.getViewPort().resize());

        const behavior = new H.mapevents.Behavior(
            new H.mapevents.MapEvents(map)
        );

        const ui = H.ui.UI.createDefault(map, defaultLayers);
        
        var parisMarker = new H.map.Marker({ lat: 48.8567, lng: 2.3508 });

        function onTap(evt: {
            currentPointer: { viewportX: any; viewportY: any };
            target: {
                getData: () => { (): any; new (): any; properties: any };
            };
        }) {
            let position = map.screenToGeo(
                evt.currentPointer.viewportX,
                evt.currentPointer.viewportY
            );

            parisMarker.setGeometry(position);
            map.addObject(parisMarker);
        }

        setInteractive(map);
        setMap(map);
        return () => map.dispose();
    }, []);

    return <div ref={mapRef} className="h-[500px] !rounded-[44px]" />;
}
