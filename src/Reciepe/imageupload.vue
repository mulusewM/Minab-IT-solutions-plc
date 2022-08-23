<template>
<div id="app">
  <update-media 
    server="/api/upload"
    media_file_path="/post_images"
    media_server="/api/media/{{$post->id}}" 
    error="@error('media'){{$message}}@enderror">
  </update-media>
</div>
</template>
<script setup>
import {UploadMedia, UpdateMedia} from "vue-media-upload";
export default {
  components: {
    UploadMedia,
    UpdateMedia
  }
};

</script>
