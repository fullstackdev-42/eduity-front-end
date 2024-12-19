<template>
    <div class="JobElementDetails col-12">
        <h5>
            {{ data.name || data.label || 'Objective' }}
        </h5>

        <ul
            v-if="attributeType === 'certifications'"
            class="list-group-flush px-0 col-9 mx-auto"
        >
            <li class="list-group-item">
                <p class="lead">
                    Certifying Organization: {{ data.certifyingOrganization }}
                </p>
            </li>
            <li class="list-group-item">
                <p class="lead">
                    Link: <a :href="data.link">{{ data.link }}</a>
                </p>
            </li>
            <li class="list-group-item">
                <p class="lead">
                    Type: {{ data.type }}
                </p>
            </li>
        </ul>

        <ul
            v-else-if="attributeType === 'education' || attributeType === 'workExperience' || attributeType === 'training'"
            class="list-group-flush px-0 col-6 mx-auto"
        >
            <li class="list-group-item">
                <p class="lead">
                    {{ data.level }} <i class="my-0 mx-1 nc-icon lindua-signal"></i>
                </p>
            </li>
        </ul>

        <ul
            v-else-if="attributeType === 'postJobsTo'"
            class="list-group-flush px-0 col-6 mx-auto"
        >
            <li class="list-group-item">
                <p class="lead">
                    {{ data.websiteURL }} <i class="my-0 mx-1 nc-icon lindua-network"></i>
                </p>
            </li>
        </ul>

        <ul
            v-else-if="attributeType === 'objectives'"
            class="list-group-flush px-0 col-6 mx-auto"
        >
            <li class="list-group-item">
                <h6>Events</h6>
                <p class="lead">
                    {{ data.events }}
                </p>
            </li>
            <li class="list-group-item">
                <h6>Notes</h6>
                <p class="lead">
                    {{ data.notes }}
                </p>
            </li>
            <li class="list-group-item">
                <h6>Tasks</h6>
                <p class="lead">
                    {{ data.tasks }}
                </p>
            </li>
        </ul>

        <ul
            v-else 
            class="list-group-flush px-0 col-6 mx-auto"
        >
            <li class="list-group-item">
                <p class="lead">
                    {{ data.importance }} <i class="my-0 mx-1 nc-icon lindua-star"></i>
                </p>
            </li>
            <li class="list-group-item">
                <p class="lead">
                    {{ data.level }} <i class="my-0 mx-1 nc-icon lindua-signal"></i>
                </p>
            </li>
        </ul>
    </div>




</template>

<script>
export default {
    name: 'JobElementDetails',
    props: {
        data: {
            type: Object,
            default: () => {}
        },
        attributeType: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>
.JobElementDetails {
    display: block;
}
</style>