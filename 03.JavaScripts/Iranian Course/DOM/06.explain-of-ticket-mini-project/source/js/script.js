const countrySelectBox  = document.querySelector(".countrySelect")
const countryCities = {
    
    Iran:["Tehran","Shiraz","Mashhad","Tabriz","Isfehan"],
    Canada:["Torento","Montral","Vancouer"],
    US:["Los Angles","New York","Buston","Chicago","San Diego"]
} 
countrySelectBox.addEventListener("change",function(){
    const citiesSelectBox = document.querySelector(".citySelect")
    const mainCountryName = countrySelectBox.value
    citiesSelectBox.innerHTML  = '<option value="Select">Select City ...</option>'
    if (mainCountryName !== "Please Select"){        
        const mainCountryCities = countryCities[mainCountryName]
        mainCountryCities.forEach(function(city){
            citiesSelectBox.innerHTML +=`<option value=${city}>${city}</option>`
        })
    }
    })
    