import mobileImg from "../assets/images/cross-sell/mobile.png";
import internetImg from "../assets/images/cross-sell/internet.png";
import tvImg from "../assets/images/cross-sell/tv.png";
import phoneImg from "../assets/images/cross-sell/phone.png";

const crossSellData = [
	{
		title: 'Mobile',
		description: "Cool phones at Hot prices. Now that's sweet. Sweet Pay™ breaks the cost of your new phone or tablet down to 24 monthly payments at 0% APR on an eligible 2-year rate plan.",
		buttonLabel: 'Add a mobile line',
		imageSource: mobileImg
	},
	{
		title: 'Internet',
		description: "Why hook up with Virgin Internet? Our modems are packed with awesome features and the latest Wi-Fi technology for a super-strong signal throughout your home.",
		buttonLabel: 'Add Internet',
		imageSource: internetImg
	},
	{
		title: 'TV',
		description: "Whenever, wherever. You're meant to be together. On your commute, at the dentist's office, in the grocery store line-up - watch TV on all your favourite devices with the Virgin Plus TV app, from your big screen to your phone screen.",
		buttonLabel: 'Add TV',
		imageSource: tvImg
	},
	{
		title: 'Home Phone',
		description: "Throwback to the future. This isn't your Grandma's Home Phone (but we think she'd like it too). Virgin Plus Home Phone works with a SIM card, so you can plug it in at home, at the cabin, or anywhere within the network.",
		buttonLabel: 'Add Home Phone',
		imageSource: phoneImg
	}
]

export default crossSellData;