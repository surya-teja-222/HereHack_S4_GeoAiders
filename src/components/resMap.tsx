import * as React from "react";
import { HERE_API_KEY } from "../assets/env";
import { resMapProps } from "../types";
import "./resMap.css";

export default function ResMap(props: resMapProps) {
    const mapRef = React.useRef(null);
    const [map, setMap] = React.useState(null);
    if (props.secondary && props.secondary.length > 0) {
        if (map && props.secondary) {
            // @ts-ignore
            var lats = [];

            for (var i = 0; i < props.secondary.length; i++) {
                lats.push(props.secondary[i].lat);
            }

            var longs = [];

            for (var i = 0; i < props.secondary.length; i++) {
                longs.push(props.secondary[i].lng);
            }

            // point on map
            if (lats.length>0) {
                for (var i = 0; i < lats.length; i++) {
                    // @ts-ignore
                    var marker = new H.map.Marker({
                        lat: lats[i],
                        lng: longs[i],
                    });
                    // @ts-ignore
                    map.addObject(marker);
                }
            }
        }
    }

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
                lat: props.inpLat,
                lng: props.inpLng,
            },
            zoom: 12,
            pixelRatio: window.devicePixelRatio || 1,
        });
        window.addEventListener("resize", () => map.getViewPort().resize());

        const behavior = new H.mapevents.Behavior(
            new H.mapevents.MapEvents(map)
        );

        const ui = H.ui.UI.createDefault(map, defaultLayers);

        var lats = props.secondary?.map((item) => item.lat);

        var longs = props.secondary?.map((item) => item.lng);

        // point on map
        if (lats && longs) {
            for (var i = 0; i < lats?.length; i++) {
                var marker = new H.map.Marker({
                    lat: lats[i],
                    lng: longs[i],
                });
                map.addObject(marker);
            }
        }

        var marker = new H.map.Marker(
            { lat: props.inpLat, lng: props.inpLng },
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
