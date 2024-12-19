<template>
<div class="FunctionalMenu col-12">
    <ul class="nav nav-tabs justify-content-around text-center">
        <li v-for="(link, index) in linkData" :key="index" class="nav-item flex-grow-1">
            <router-link v-if="$route.fullPath === link.path" class="nav-link lead" :to="route">{{ link.label }}</router-link>
            <router-link v-else-if="link.label === 'Details'" class="nav-link lead" :to="{ name: containerType, params:{ containerType: containerType } }">{{ link.label }}</router-link>
            <router-link v-else class="nav-link lead" :to="link.path">{{ link.label }}</router-link>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'FunctionalMenu',
    data() {
        return {
            linkData: [
                {
                    label: 'Details',
                    path: `${this.route}/details`,
                },
                {
                    label: 'Feedback',
                    path: `${this.route}/feedback`,
                },
                {
                    label: 'Indicators',
                    path: `${this.route}/indicators`,
                },
                {
                    label: 'Structure',
                    path: `${this.route}/structure`,
                },
                {
                    label: 'Team',
                    path: `${this.route}/team`,
                },
                {
                    label: 'Updates',
                    path: `${this.route}/updates`,
                }
            ],
        }
    },
    props: {
        route: {
            type: String,
            default: null
        },
        containerType: {
            type: String
        }
    }
}
</script>

<style lang="scss" scoped>
.FunctionalMenu {
    border-bottom: 1px solid #3157a3;
    .nav-item {
        color: #94918d;
        .nav-link {
            border: 1px solid transparent;
            border-top-left-radius: .50rem;
            border-top-right-radius: .50rem;
        }
        .nav-link:hover {
            border: 1px solid #94918d;
            border-bottom: black;
            border-top-left-radius: .50rem;
            border-top-right-radius: .50rem;
        }
        .nav-link.active {
            color: #fff;
            border: 1px solid #3157a3;
            background: linear-gradient(180deg, #2756a9 0%, #1d4180 100%);
        }
    }
}
</style>