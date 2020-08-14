<template>
    <aside class="bg-white" style="width: 250px;">

        <div class="pt-4 pb-0 px-5">
            <router-link
                    v-if="isPm"
                    class="button bg-ultramarine text-white w-full inline-flex items-center"
                    to="/fund/create">

                <i class="mr-3 fa fa-suitcase"></i>Create Fund
            </router-link>
        </div>

        <!-- Main navigation -->
        <nav>
            <div class="px-3">
                <h5 class="text-xs font-semibold uppercase leading-none text-bluey-grey pl-4 pt-8 pb-4" style="letter-spacing: 2px;">
                    Main Navigation
                </h5>

                <ul>
                    <li class="py-2">
                        <router-link to="/" exact class="aside-link">
                            <i class="mr-3 fa fa-th-large"></i>Portfolio
                        </router-link>
                    </li>

                    <li class="py-2">
                        <a href="#" class="block rounded text-slate py-2 px-5 text-lg font-normal leading-none">
                            <i class="mr-3 fa fa-cog"></i>Settings
                        </a>
                    </li>
                </ul>
            </div>

            <div class="px-3">
                <h5 class="text-xs font-semibold uppercase leading-none text-bluey-grey pl-4 pt-8 pb-4" style="letter-spacing: 2px;">
                    Support
                </h5>

                <ul>
                    <li class="py-2">
                        <a href="#" class="block rounded text-slate py-2 px-5 text-lg font-normal leading-none">
                            <i class="mr-3 fa fa-rocket"></i>Knowledge Base
                        </a>
                    </li>

                    <li class="py-2">
                        <a href="#" class="block rounded text-slate py-2 px-5 text-lg font-normal leading-none">
                            <i class="mr-3 fa fa-th-large"></i>Help Center
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </aside>
</template>

<script>
    export default {
        props: {
            user: {
                type: Object,
                required: true
            }
        },

        computed: {
            isPm() {
                return this.user.role === 'pm';
            }
        }
    }
</script>
