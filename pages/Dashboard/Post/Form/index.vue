<script setup lang="ts">
import Editor from "@tinymce/tinymce-vue";

definePageMeta({
  title: "Dashboard - Add",
  layout: "dashboard-layout",
});
useSeoMeta({
  title: "Dashboard - Add"
})
</script>

<template>
  <div>
    <Editor
        class="w-full h-full border rounded-xl p-4"
        api-key="jmpp7toto9znod853ovmi9c1fyuchcd9nkuboceobj6qbdtm"
        :init="{
        toolbar_mode: 'sliding',
        lang:'fa',
        directionality: 'rtl',
        inline:true,
        plugins: [
          // Core editing features
          'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
          // Your account includes a free trial of TinyMCE premium features
          // Try the most popular premium features until Feb 21, 2025:
          'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
        ],
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
      }"
        initial-value="Welcome to TinyMCE!"
    />
  </div>
</template>

<style scoped></style>
