import {Locator, Page} from "@playwright/test";
import {Constants} from "../utils/test";


export class CampaignsPage{
    private readonly page: Page;
    private readonly constants;

// Element Locators
    private readonly inputCampaignNameField: Locator;
    private readonly descriptionCampaignField: Locator;
    private readonly createCampaignButton: Locator;

    constructor(page: Page, constants: Constants) {

        this.page = page;
        this.constants = constants;

        this.inputCampaignNameField = page.locator("input[name='campaign[name]']");
        this.descriptionCampaignField = page.locator("input[name='campaign[description]']");
        this.createCampaignButton = page.locator("input[value='Create Campaign']");

    }
async goto(){
        await this.page.goto(`${this.constants.webClientURL}/campaigns/new`)
}
 async inputCampaignName(name:string){

        await this.inputCampaignNameField.fill(name)

}
async inputCampaignDescription(name:string){
        await this.descriptionCampaignField.fill(name)
}
async clickCreateCampaignButton(){
        await this.createCampaignButton.click();
}
async verifyAddingCampaign(name:string){

        await this.goto();
        await this.inputCampaignName(name);
        await this.inputCampaignDescription(name);
        await this.clickCreateCampaignButton();
}
}