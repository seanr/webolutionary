# Where are all of the components?

The components that historically came with webolutionary-drupal have been moved to [Compound](https://github.com/webolutionary-ds/compound).

# Why did they move?

Historically, our installation steps looked something like this:

1. Install an Webolutionary-based theme.
2. Delete all of the default components.
3. Copy and paste individual components over when we needed them.
4. Create new components that weren't a part of the original set.

This was a little annoying, and we realized there were probably numerous sites out there that had extra code just bloating repositories because they _might_ be used one day. We didn't want to encourage that, so we found a way to abstract our boilerplate code into an external repository where we could more easily update those starter component files, and simplify our theme creation process.

Moving them also enables us to make updates to the boilerplate code and version them, so breaking changes won't affect active sites.

# How can I get the starter components into my project?

You can copy and paste them from the Compound repo, or another project. OR you can use the Webolutionary CLI (which is our recommendation!)

# What is the Webolutionary CLI?

The final piece we developed to facilitate pulling those boilerplate components into a project is the [Webolutionary CLI](https://github.com/webolutionary-ds/webolutionary-cli).

This is a robust tool that developers can use to pull components from an external repository into a projects local repo with a simple command.

You'll notice that the webolutionary-drupal starter has a `project.webolutionary.json` file in its root. This is a pretty simple file to start, but once you initialize a system (like Compound) it is used to define your projects directory structure and where components should be downloaded to when you install them. (You can [see the schema here](https://github.com/webolutionary-ds/webolutionary-cli/blob/develop/src/schemas/webolutionaryProjectConfig.json))

To start using the CLI, check out the [Webolutionary CLI docs page](https://docs.webolutionary.info/supporting-projects/webolutionary-cli).
