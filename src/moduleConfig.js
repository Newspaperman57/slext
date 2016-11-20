var modules = [
	{
		id: "compile_main",
		name: "Compile main",
		desc: "Adds a tab state that allows you to compile it from any other file",
		dependencies: ["tabs"],
		shortcut: "alt+m"
	},
	{
		id: "goto_file",
		name: "Goto file",
		desc: "Makes it possible to upen files whose path is under the cursor",
		dependencies: [""],
		shortcut: "alt+g"
	},
	{
		id: "persistence",
		name: "Tab percistency",
		desc: "Your open tabs are saved, and open automaticly when you return",
		dependencies: ["tabs"],
		// shortcut: ""
	},
	{
		id: "search",
		name: "Quick-search",
		desc: "Quickly search for the name of a file and open it instead of looking through the file tree",
		dependencies: [""],
		shortcut: "alt+p"
	},
	{
		id: "tabs",
		name: "Tabs",
		desc: "Manage your files with tabs and favorite the ones you're constantly switching between",
		dependencies: [""],
		shortcut: "alt+d"
	}
]