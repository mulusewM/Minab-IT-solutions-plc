<template>
  <button onclick="update_reciepe()"><i class="fa fa-minus-circle"></i></button>
</template>
<script>
mutation update_reciepe{
  update_reciepe(
    where: {id: {_eq: reciepe[0].id}},
    _set: {
      like:like+1,   
   }
}
</script>