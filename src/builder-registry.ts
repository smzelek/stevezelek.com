import { Builder } from "@builder.io/react";
import Code from "./components/code/code";
import CodeBlock from "./components/code-block/code-block";
import EmphaticPoint from "./components/emphatic-point/emphatic-point";
import Link from "./components/link/link";
import Tag from "./components/tag/tag";

Builder.registerComponent(CodeBlock, {
  name: "CodeBlock",
  inputs: [
    {
      name: "caption",
      type: "richText",
    },
    {
      name: "content",
      type: "longText",
    },
    {
      name: "language",
      type: "string",
    },
    {
      name: "showLines",
      type: "boolean",
    },
    {
      name: "title",
      type: "string",
    },
  ],
});

Builder.registerComponent(EmphaticPoint, {
  name: "EmphaticPoint",
  inputs: [
    {
      name: "children",
      type: "richText",
      meta: {
        ts: "string | (string | Element)[]",
      },
    },
  ],
});

Builder.registerComponent(Code, {
  name: "Code",
  inputs: [
    {
      name: "children",
      type: "string",
      meta: {
        ts: "string | Element",
      },
    },
  ],
});

Builder.registerComponent(Link, {
  name: "Link",
  inputs: [
    {
      name: "href",
      type: "string",
    },
    {
      name: "children",
      type: "text",
    },
  ],
});

Builder.registerComponent(Tag, {
  name: "Tag",
  inputs: [
    {
      name: "name",
      type: "string",
      enum: ["backend", "design", "devops", "frontend", "teamwork"],
      required: true,
    },
  ],
});
