import { th } from '@faker-js/faker';
import { User } from "./User";
import { Company } from "./Company";

export interface Mappable {
    location: {
        lat: number;
        lng: number
    },
    markerContent(): string;
    
}
export class CustomMap {
    private googleMap: google.maps.Map;
    constructor(element:HTMLElement ) {
        this.googleMap = new google.maps.Map(element, { zoom: 1, center: { lat: 0, lng: 0 } })
    }

    addMarker(mappableEntity:Mappable):void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappableEntity.location.lat,
                lng: mappableEntity.location.lng
            }
        });
        marker.addListener("click", () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappableEntity.markerContent()
            });
            infoWindow.open(this.googleMap, marker)
        })
    }
}

