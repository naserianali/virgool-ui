<script setup lang="ts">
import Editor from "@tinymce/tinymce-vue";

const props = defineProps({
  existedTinyMce: {
    required: false,
    type: String
  }
});
const customTemplates = [
  {
    title: 'عجییـــــــــبه',
    locked: true,
    description: '',
    content:
        '<p class="bg-red-500">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.\n' +
        '\n' +
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>',
  },
];
const data = ref<string>(props.existedTinyMce || "");
const emit = defineEmits([
  "tinymce"
]);
watch(() => data.value, (newData) => {
  emit('tinymce', newData);
});
</script>

<template>
  <ClientOnly>
    <Editor
        v-model="data"
        class="w-full h-full resize-none border rounded-xl p-4 mx-auto"
        api-key="jmpp7toto9znod853ovmi9c1fyuchcd9nkuboceobj6qbdtm"
        :init="{
        toolbar_mode: 'sliding',
        language:'fa',
        templates:customTemplates,
        inline:false,
        toolbar:false,
        plugins:'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion',
        /*toolbar: 'template |blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags |' /!*+
         ' addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight |' +
          ' checklist numlist bullist indent outdent | emoticons charmap | removeformat'*!/,*/
        quickbars_insert_toolbar:'template |blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags ',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Naserian Ali',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
      }"
        initial-value=""
    />
  </ClientOnly>
</template>

<style scoped></style>
