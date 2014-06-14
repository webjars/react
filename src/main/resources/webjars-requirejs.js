requirejs.config({
    "paths": { 
		"react": webjars.path("react", "react"),
		"react-with-addons": webjars.path("react", "react-with-addons"),
		"JSXTransformer":  webjars.path("react", "JSXTransformer")
	},
    "shim": {
        "react": { "exports": "React" },
        "react-with-addons": { "exports": "React" },
        "JSXTransformer": { "exports": "transform" }
    }
});
