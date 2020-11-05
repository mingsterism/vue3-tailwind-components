<template>
  <div>
    <h1>Gallery</h1>
    <!-- <vx-card title="Gallery" class="mb-base"> -->
    <div class="demo-alignment">
      <Button btnTxt="Add Image" title="Change" @click="handleAddImage" />
    </div>
    <div class="demo-alignment">
      <div :key="index" :src="image.thumb" v-for="(image, index) in images">
        <img :src="image.thumb" class="img-rounded-corners" />
        <div class="demo-alignment">
          <Button
            btnTxt="Change"
            title="Change"
            @click="handleUpdateImage(image.id, image.thumb)"
          />
          <Button
            btnTxt="Delete"
            title="Delete"
            @click="promptDeleteMerchantImage(image.id)"
          />
          <!-- <vs-button
              icon-pack="feather"
              color="danger"
              icon="icon-trash"
              @click="promptDeleteMerchantImage(image.id)"
              class="mr-4"
            /> -->
        </div>
      </div>
    </div>
    <!-- </vx-card> -->

    <!-- Add New Image -->
    <!-- <vs-prompt
        title = "Add new image for this merchant"
        @close="clearAddImage"
        @cancel="clearAddImage"
        @accept="confirmAddImage"
        :active.sync="showAddImage"
        :is-valid="validAddImage">
        <div class="con-exemple-prompt">
          <img v-if="imageUrl!=''" class="mt-4 w-full " :src="imageUrl" style="width:200px;height:200px;" />
          <input type="file"  @change="onImageChange">
          <vs-alert :active="!validAddImage" color="danger" icon="new_releases" >
            Fields can not be empty.
          </vs-alert>
        </div>
      </vs-prompt> -->

    <!-- Update Image -->
    <!-- <vs-prompt
        title = "Update this image"
        @close="clearAddImage"
        @cancel="clearAddImage"
        @accept="confirmUpdateImage"
        :active.sync="showUpdateImage"
        :is-valid="validAddImage"
        >
        <div class="con-exemple-prompt">
          <div class="demo-alignment">
            <img v-if="imageUrl!=''" class="mt-4 w-full" :src="imageUrl" style="width:200px;height:200px;" />
             <input type="file"  @change="onImageChange">
          </div>
        </div>
      </vs-prompt> -->
  </div>
</template>

<script>
import Button from "/@/components/molecules/PrimaryButton.molecule.vue";
import CustomBtn from "/@/components/molecules/PrimaryButton.molecule.vue";
export default {
  name: "MerchantGallery",
  components: {
    Button,
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showAddImage: false,
      showUpdateImage: false,
      showDeleteImage: false,
      imageId: "",
      image: "",
      imageUrl: "",
    };
  },
  computed: {
    validAddImage() {
      return this.image.length > 0 && this.imageUrl.length > 0;
    },
  },
  methods: {
    //==================================================
    // This function is called once user clicks on the "edit" icon under each menu item.
    // Menu item data fields are initialized based on info for that particular menu item.
    //==================================================
    handleAddImage() {
      this.showAddImage = true;
    },
    // deleteImage () {
    //   this.showDeleteImage = true
    // },
    handleUpdateImage(imageId, imageSrc) {
      this.imageId = imageId;
      this.imageUrl = imageSrc;
      this.showUpdateImage = true;
    },
    //==================================================
    // This function is called once user clicks on the "accept" button of the edit menu item prompt.
    // Two possibility of update
    // 1. Update only the details while keeping existing image.
    // 2. Update both details and new image.
    //==================================================
    confirmAddImage() {
      //Check if image has been changed. If not update only the details.
      const payload = {
        merchantId: this.$route.params.merchantId,
        image: this.image[0],
      };
      this.$store
        .dispatch("merchantManagement/addMerchantImage", payload)
        .then((data) => {
          this.$vs.notify({
            color: "success",
            title: `Image : ${data.id}`,
            text: "Image successfully uploaded",
            time: 4000,
          });
        });
    },
    confirmUpdateImage() {
      //Check if image has been changed. If not update only the details.
      const payload = {
        id: this.imageId,
        merchantId: this.$route.params.merchantId,
        image: this.image[0],
      };
      this.$store
        .dispatch("merchantManagement/updateMerchantImage", payload)
        .then((data) => {
          this.$vs.notify({
            color: "success",
            title: `Image : ${data.id}`,
            text: "Image successfully updated",
            time: 4000,
          });
        });
    },
    clearAddImage() {
      this.image = "";
      this.imageUrl = "";
    },
    //==================================================
    // This function is triggered when user selects new picture.
    //==================================================
    onImageChange(e) {
      this.image = e.target.files || e.dataTransfer.files;
      this.imageUrl = URL.createObjectURL(e.target.files[0]);
    },
    //==================================================
    // This function is called once user clicks on the "delete" icon for each menu item.
    // Via a dialog, user can confirm to delete. If delete, then deleteMenuItem function
    // is called with two parameters (menu category Id, menu item id )
    //==================================================
    promptDeleteMerchantImage(imageId) {
      const titleStr = "Delete Image";
      const contentStr = "Are you sure you want to delete this image ?";
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: titleStr,
        text: contentStr,
        accept: this.confirmDeleteMerchantImage,
        acceptText: "Delete",
        parameters: [imageId],
      });
    },
    //==================================================
    // This function dispatch delete action where API call is executed.
    // Once API successful, a notification is shown to user.
    //==================================================
    confirmDeleteMerchantImage(deleteParams) {
      console.log("categoryId ", deleteParams[0]);
      console.log("itemId ", deleteParams[1]);

      this.$store
        .dispatch("merchantManagement/deleteMerchantImage", deleteParams[0])
        .then((data) => {
          this.$vs.notify({
            color: "success",
            title: `Image Id : ${data.id}`,
            text: `${data.name} was successfully deleted`,
            time: 4000,
          });
        });
    },
  },
};
</script>
<style>
.img-rounded-corners {
  border-radius: 15%;
}
</style>
