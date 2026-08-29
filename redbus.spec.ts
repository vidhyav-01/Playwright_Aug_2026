import { chromium, firefox, test } from "@playwright/test";
test("To launch a msedge browser ", async () => {
//To launch the redbus using msedge
const edgebrowserInstance = await chromium.launch({ headless: false, channel: "msedge" }); //explicitly launch edge
const edgebrowserContext = await edgebrowserInstance.newContext();
const edgepage = await edgebrowserContext.newPage();
await edgepage.goto("https://www.redbus.in/");
const redbustitle = await edgepage.title();
const redbusURL = edgepage.url();

//add waits 
await edgepage.waitForTimeout(5000);
await edgebrowserInstance.close();
});

//To launch redbus using  firefox

test("To launch a msedge browser" ,async () => {
    const edgebrowserInstance = await firefox.launch({headless:false });
    const edgebrowsercontext = await edgebrowserInstance.newContext();
    const edgepage = await edgebrowsercontext.newPage();
    await edgepage.goto("https://www.redbus.in/");

    const flipkarttitle = await edgepage.title();
    const flipkarturl = edgepage.url();

    //add waits 
    await edgepage.waitForTimeout(5000);
    await edgebrowserInstance.close();

})