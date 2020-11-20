<template>
<v-container>
    <div> 
        <fieldset class="border-bottom form-group">
        <legend>
        <h2>Profile</h2>
        </legend>
        </fieldset>

        <div class="row">
            <h5 class="spacing">Name:</h5> 
            <h5 v-if="!this.editing">{{ this.account.name }}</h5>
            <input
            v-else
                v-model="form.name"
                type="text"
                class="form-control"
                id="inputName"
                placeholder="New Name"
            />
        </div>
        <div class="row">
            <h5 class="spacing">E-mail:</h5> 
            <h5>{{ this.account.email }}</h5>
        </div>
        <div class="row">
            <h5 class="spacing">Password:</h5> 
            <h5 v-if="!this.editing">********</h5>
            <input
            v-else
                    v-model="form.password"
                    type="password"
                    class="form-control"
                    id="inputPassword"
                    placeholder="New Password"
                    />
        </div>
        <div class="row">
            <h5 class="spacing">Balance:</h5> 
            <h5 v-if="!this.editing">{{ this.account.money }}</h5>
            <input
            v-else
                    v-model="form.balance"
                    type="text"
                    class="form-control"
                    id="inputBalance"
                    placeholder="Amount to Add"
                />
        </div>
        <div class="row">
            <h5 class="spacing">Previous Orders:</h5> 
        </div>

        <div class="m-5">
            <button
            v-if="!this.editing"
            @click="editInfo"
            type="edit"
            :class="['col-5', 'btn', `btn-${$store.state.site.mainColor}`]"
            >
            Edit Info
            </button>
            <button
            v-else
            @click="saveInfo"
            type="edit"
            :class="['col-5', 'btn', `btn-${$store.state.site.mainColor}`]"
            >
            Save Info
            </button>
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
        saveInfo() {
            this.$func.updateName(this.form.name)
            this.$func.updatePassword(this.form.password);
            this.$func.addMoney(parseInt(this.form.balance, 10));
            this.editing = false;
        },
    },
};
</script>

<style>
.spacing {
  padding: 7px;
  display: inline;
}

.row {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
}
</style>
