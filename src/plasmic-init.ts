import { initPlasmicLoader } from "@plasmicapp/loader-react";
import { HelloWorld } from './components/HelloWorld';
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "57P6Yrm7KzDcCDjaYV3TtV",  // ID of a project you are using
      token: "yXP1PBvFtWp6IDSxURL1zUvi8FeWDcVkQFpLeYeUUy42bYfrGfMnKAOr9kupb5oDe8DV1oKJb762DoZgT0poJQ"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
});

PLASMIC.registerComponent(HelloWorld, {
    name: 'HelloWorld',
    props: {
      verbose: 'boolean',
      children: 'slot'
    }
  });