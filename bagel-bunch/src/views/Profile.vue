<template>
<v-container>
    <div v-if="!this.editing"> 
        <fieldset class="border-bottom form-group">
        <legend>
        <h2>Profile</h2>
        </legend>
        </fieldset>
        <h5 class="spacing"> Name: {{ this.account.name }}</h5>
        <h5 class="spacing"> E-mail: {{ this.account.email }}</h5>
        <h5 class="spacing"> Password: ******** </h5>
        <h5 class="spacing"> Balance: {{ this.account.money }}</h5>
        <h5 class="spacing"> Favorite Menu Item: {{ this.account.favorite }}</h5>
        <h5 class="spacing"> Previous Orders: {{ this.account.orders }}</h5>
        <div class="m-5">
            <button
            @click="editInfo"
            type="edit"
            :class="['col-5', 'btn', `btn-${$store.state.site.mainColor}`]"
            >
            Edit Info
            </button>
        </div>
    </div>
    <div v-else>
        <fieldset class="border-bottom form-group">
        <legend>
          <h2>Edit Account Info</h2>
        </legend>
        </fieldset>
        <div class="content-section container">
            <div class="form-group">
            <label for="inputName">Name</label>
            <input
                v-model="form.name"
                type="text"
                class="form-control"
                id="inputName"
                placeholder= "Name"
            />
            </div>
            <div class="form-group">
                <label for="inputPassword">Password</label>
                <input
                    v-model="form.password"
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    placeholder="********"
                    />
            </div>
            <div class="form-group">
                <label for="inputBalance">Balance</label>
                <input
                    v-model="form.balance"
                    type="text"
                    class="form-control"
                    id="inputBalance"
                    placeholder="100"
                />
            </div>
            <div class="form-group">
                <label for="inputEmail1">Email address</label>
                <input
                    v-model="form.email"
                    type="email"
                    class="form-control"
                    id="inputEmail1"
                    placeholder="email"
                />
            </div>
            <div class="m-5">
            <button
            @click="saveInfo"
            type="edit"
            :class="['col-5', 'btn', `btn-${$store.state.site.mainColor}`]"
            >
            Save Info
            </button>
        </div>
        </div>
    </div>

</v-container>

</template>

<script>
export default {
    data() {
        return {
            form: {
                name: "",
                password: "",
                balance: ""
            },
            account: this.$store.getters.user,
            editing: false,
        }
    },

    methods: {
        editInfo() {
            this.editing = true;
        },
        updateName() {
            this.$func.updateName(this.form).then((resp) => {
                console.log(`response ${resp}`);
                
            });
        },
        updatePassword() {
            this.$func.updatePassword()
        },
        addMoney() {
            this.$func.addMoney()
        },
        saveInfo() {
            this.editing = false;
        },
    },
};
</script>

<style>
.spacing {
  padding: 7px;
}
</style>
