import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import { remarkKroki } from "remark-kroki";

const config: Config = {
	title: "Strata onboarding backend docs",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: "https://acorrea-designli.github.io",
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/strata-backend-docs/",
	trailingSlash: false,
	
	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "acorrea-designli", // Usually your GitHub org/user name.
	projectName: "strata-backend-docs", // Usually your repo name.
	
	onBrokenLinks: "log",
	onBrokenMarkdownLinks: "log",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			{
				docs: {
					routeBasePath: "/",
					sidebarPath: "./sidebars.ts",
					remarkPlugins: [
						[
							remarkKroki,
							{
								// ...options here
								alias: ["plantuml"],
								target: "mdx3",
								server: "https://kroki.io",
							},
						],
					],
				},
				blog: false,
				theme: {
					customCss: "./src/css/custom.css",
				},
			} satisfies Preset.Options,
		],
	],

	themeConfig: {
		image: "img/logo.png",
		navbar: {
			title: "Strata backend",
			logo: {
				alt: "Strata onboardin backend docs logo",
				src: "img/logo.png",
			},
			items: [
				{
					type: "docSidebar",
					sidebarId: "docsSidebar",
					position: "left",
					label: "Docs",
				},
				{
					type: "docSidebar",
					sidebarId: "enumsSidebar",
					position: "left",
					label: "Enums",
				},
				{
					type: "docSidebar",
					sidebarId: "architectureSidebar",
					position: "left",
					label: "Architecture",
				},
			],
		},
		footer: {},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.vsDark,
			additionalLanguages: ["json", "graphql"],
		},
	} satisfies Preset.ThemeConfig,
};

export default config;
