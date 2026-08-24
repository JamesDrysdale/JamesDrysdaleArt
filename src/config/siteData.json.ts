export interface SiteDataProps {
	name: string;
	title: string;
	description: string;
	useViewTransitions?: boolean; // defaults to false. Set to true to enable some Astro 3.0 view transitions
	author: {
		name: string;
		email: string;
		instagram: string; // used for instagram cards when sharing a blog post on instagram
	};
	defaultImage: {
		src: string;
		alt: string;
	};
}

// Update this file with your site specific information
const siteData: SiteDataProps = {
	name: "James Drysdale Fine Art",
	// Your website's title and description (meta fields)
	title: "James Drysdale Fine Art",
	description:
		"Get your next website up and running quickly with our beautiful website theme designed using Astro and Tailwind CSS. Perfect for freelancers, developers, startups, and personal use.",
	useViewTransitions: true,
	// Your information!
	author: {
		name: "James Drysdale",
		email: "hello@jamesdrysdale.co.uk",
		instagram: "jamesdrysdale84",
	},

	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/james-drysdale-logo.jpg",
		alt: "James Drysdale logo",
	},
};

export default siteData;
