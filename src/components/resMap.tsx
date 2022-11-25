import * as React from "react";
import { HERE_API_KEY } from "../assets/env";
import "./resMap.css";

export default function ResMap() {
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
            center: {
                lat: 28.6139,
                lng: 77.209,
            },
            zoom: 14,
            pixelRatio: window.devicePixelRatio || 1,
        });
        window.addEventListener("resize", () => map.getViewPort().resize());

        const behavior = new H.mapevents.Behavior(
            new H.mapevents.MapEvents(map)
        );

        const ui = H.ui.UI.createDefault(map, defaultLayers);

        var lats = [
            28.65291, 28.647959999999998, 28.628629999999998, 28.64793,
            28.659190000000002, 28.679920000000003, 28.647440000000003,
            28.69122, 28.683120000000002, 28.650170000000003,
        ];

        var longs = [
            77.35191999999999, 77.4036, 77.47351, 77.36692, 77.44102,
            77.36393000000001, 77.4456, 77.49458, 77.36487, 77.35405,
        ];

        // point on map
        for (var i = 0; i < lats.length; i++) {
            var marker = new H.map.Marker({
                lat: lats[i],
                lng: longs[i],
            });
            map.addObject(marker);
        }

        var marker = new H.map.Marker(
            { lat: 28.6692, lng: 77.4538 },
            {
                icon: new H.map.Icon("/pointer.svg"),
            }
        );
        map.addObject(marker);

        function onTap(evt: {
            currentPointer: { viewportX: any; viewportY: any };
            target: {
                getData: () => { (): any; new (): any; properties: any };
            };
        }) {
            console.log("tapped");
        }

        setInteractive(map);
        setMap(map);

        return () => {
            map.dispose();
        };
    }, []);

    return (
        <div
            ref={mapRef}
            className="h-[90vh] ml-auto w-[90vw] !overflow-x-clip"
        />
    );
}
