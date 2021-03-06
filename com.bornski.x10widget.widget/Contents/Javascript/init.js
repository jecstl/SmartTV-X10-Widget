include("Framework/kontx/1.1/src/all.js");

include("Javascript/core/preferences.js");
include("Javascript/core/snippetableview.js");

include("Javascript/views/snippet.js");
include("Javascript/views/dynamicsnippet.js");
include("Javascript/views/sidebar.js");

KONtx.application.init({
	views: [
		{ id: 'view-Main', viewClass: MainView },
		{ id: 'view-Settings', viewClass: KONtx.views.AboutBox },
		{ id: 'snippet-main', viewClass: StaticSnippetView },
	],
	defaultViewId: 'view-Main',
	settingsViewId: 'view-Settings',
});

$preferences.getProfileSnippetConfsHandler.subscribeTo(KONtx.application, ['getProfileSnippetConfs'], $preferences);