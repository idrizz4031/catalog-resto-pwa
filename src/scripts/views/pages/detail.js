import UrlParser from "../../routes/url-parser";
import databaseResto from "../../data/database-resto";
import { createUIDetailItemResto } from "../templates/template-creator";


const Detail = {
    async render() {
        return `
            <div class="resto-detail" id="DetailResto"></div>
        `;
    },



    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const resto = await databaseResto.detailResto(url.id);
        const ContainerResto = document.querySelector('#resto-detail');
        ContainerResto.innerHTML = createUIDetailItemResto(resto);
    },
};

export default Detail;