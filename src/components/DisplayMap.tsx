// src/DisplayMapClass.js
import * as React from "react";
import { HERE_API_KEY } from "./../assets/env";
import { mapProps } from "../types";

type latLongType = {
    lat: number;
    lng: number;
};

export default function DisplayMap(props: mapProps) {
    const mapRef = React.useRef(null);
    const [map, setMap] = React.useState(null);

    var defaultLat: latLongType;
    if (props.type === "land") {
        defaultLat = {
            lat: 28.6139,
            lng: 77.209,
        };
    }
    if (props.type === "house") {
        defaultLat = {
            lat: -37.8136,
            lng: 144.96751,
        };
    }
    var parisMarker: { setGeometry: (arg0: any) => void };
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
            center: props.lat ? { lat: props.lat, lng: props.lng } : defaultLat,
            zoom: props.lat ? 10 : props.type==="house" ? 11:6,
            pixelRatio: window.devicePixelRatio || 1,
        });
        window.addEventListener("resize", () => map.getViewPort().resize());

        const behavior = new H.mapevents.Behavior(
            new H.mapevents.MapEvents(map)
        );

        const ui = H.ui.UI.createDefault(map, defaultLayers);

        parisMarker = new H.map.Marker(
            props.lat ? { lat: props.lat, lng: props.lng } : defaultLat
        );
        if (props.lat) {
            map.addObject(parisMarker);
        }

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

        return () => {
            map.dispose();
        };
    }, [props.label]);

    return <div ref={mapRef} className="h-[100%] !rounded-[44px]" />;
}
