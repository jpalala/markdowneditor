<template>
  <div class="max-w-4xl mx-auto py-10">
    <h1 class="text-2xl font-bold mb-6">Markdown Editor</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label class="block text-lg font-medium mb-2" for="markdown-input">Write Markdown:</label>
        <textarea
          id="markdown-input"
          v-model="markdown"
          class="w-full h-80 p-4 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-500 focus:border-blue-500 resize-none"
          placeholder="Enter markdown text here..."
        ></textarea>
      </div>

      <div>
        <label class="block text-lg font-medium mb-2">Preview:</label>
        <div
          class="w-full h-80 p-4 border border-gray-300 rounded-md shadow-sm bg-gray-50 overflow-auto"
          v-html="renderedMarkdown"
        ></div>
      </div>
    </div>

    <button
      @click="saveMarkdownContent"
      class="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 focus:ring focus:ring-blue-300"
    >
      Save
    </button>
  </div>
</template>

<script>
import { marked } from "marked";
import { saveMarkdown } from "@/services/saveMarkdownService"; // Adjust the path as needed

export default {
  name: "MarkdownEditor",
  data() {
    return {
      markdown: "",
    };
  },
  computed: {
    renderedMarkdown() {
      return marked(this.markdown);
    },
  },
  methods: {
    async saveMarkdownContent() {
      try {
        const result = await saveMarkdown(this.markdown);
        alert("Markdown saved successfully!");
        console.log("Server Response:", result);
      } catch (error) {
        alert("Failed to save markdown.");
      }
    },
  },
};
</script>

