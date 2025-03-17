import gandhinagarData from "./gandhinagar"
import ahmedabadData from "./ahmedabad";
import patanData from "./patan";
import mehsanaData from "./mehsana";


const districtData: { [key: string]: { year: number; temperature: number; humidity: number; rainfall: number }[] } = {
    Gandhinagar: gandhinagarData,
    Ahmedabad: ahmedabadData,
    Patan: patanData, 
    Mehsana: mehsanaData,
};

export default districtData;
 