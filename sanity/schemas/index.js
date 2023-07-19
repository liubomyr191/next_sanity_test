export const schemaTypes = [
  {
    name: "project",
    title: "Work",
    type: "document",
    fields: [
      {
        name: "video",
        title: "Video",
        type: "mux.video",
        validation: (Rule) => Rule.required(),
      },
    ],
  },
];
