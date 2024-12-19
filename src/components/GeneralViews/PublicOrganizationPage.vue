<template>
<div class="PublicOrganizationPage">
    <div class="container-fluid p-4">
        <h1 class="mx-3 text-left">{{ organization.name }}</h1>
        <div class="row mb-5">
            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <ul class="list-group list-group-flush col-12">
                    <li class="list-group-item">
                        <span class="list-label">Entity Type: </span> {{ organization.entityType }}
                    </li>
                    <li class="list-group-item">
                        <span class="list-label">Administrator: </span> {{ organization.administrator }}
                    </li>
                    <li class="list-group-item">
                        <span class="list-label">Website: </span> {{ organization.websiteURL }}
                    </li>
                    <li class="list-group-item">
                        <span class="list-label">Email: </span> {{ organization.mainEmail }}
                    </li>
                    <li class="list-group-item">
                        <span class="list-label">Phone #: </span> {{ organization.mainPhone }}
                    </li>
                    <li class="list-group-item">
                        <span class="list-label">Date Founded: </span> {{ organization.dateFounded }}
                    </li>
                </ul>
            </div>
            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                <div class="container-fluid border border-dark rounded p-5">
                    <h2>Opportunities</h2>
                    <div class="row">
                        <div class="col-4">
                            <div class="border border-dark rounded p-5">Current</div>
                        </div>
                        <div class="col-4">
                            <div class="border border-dark rounded p-5">Upcoming</div>
                        </div>
                        <div class="col-4">
                            <div class="border border-dark rounded p-5">Tracking</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-4">
                <div class="border border-dark rounded p-5">Facebook Feed (Coming Soon)</div>
            </div>
            <div class="col-4">
                <div class="border border-dark rounded p-5">Twitter Feed (Coming Soon)</div>
            </div>
            <div class="col-4">
                <div class="border border-dark rounded p-5">Instagram Feed (Coming Soon)</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import mockData from '@/mockData';

export default {
    name: 'PublicOrganizationPage',
    data() {
        return {
            organization: {}
        }
    },
    mounted() {
        const { organizationId } = this.$route.params;
        this.organization = mockData.get('organizations', organizationId);
    }
}

</script>

<style lang="scss" scoped>
.PublicOrganizationPage {
    display: block;
    .list-group-item {
        background: none !important;
        border: none;
        .list-label {
            font-weight: 900;
        }
    }
}
</style>