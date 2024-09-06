import { User } from './User';
import { Company } from './Company';
import { CustomMap } from './CustomMap';
const user = new User();
const company = new Company();

const newContainer: HTMLElement = document.createElement("div");;
const mapContainer = document.getElementById("map-container");
if (!mapContainer)
{
    newContainer.id = "map-container";
    document.body.append(newContainer);
}
const customMap = new CustomMap(mapContainer || newContainer)

customMap.addMarker(user)
customMap.addMarker(company)
