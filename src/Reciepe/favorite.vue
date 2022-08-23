<template>
  <button onclick="update_reciepe()"><font-awesome-icon icon="fa-thin fa-hand-love" /></button>
</template>
<script>
mutation update_reciepe {
  update_reciepe(
    where:{id:{_eq: reciepe[0].id}},
    _set:{
      favorite:favorite+1,  
   }
  ) 
}
</script>