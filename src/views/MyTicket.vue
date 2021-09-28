<template>
    <div class="my-4">
        <!--判斷 無 訂單-->
        <div v-if="order.length <= 0" class="text-center">
            還沒建立任何訂單呦!
        </div>
        
        <!--判斷 有 訂單 表格呈現-->
        <div v-else>
            <div class="table-responsive-lg">
                <table class="table">
                    <thead class="text-center ">
                        <tr>
                            <th scope="col" class="text-nowrap">狀態</th>
                            <th scope="col" class="text-nowrap">訂單詳情</th>
                            <th scope="col" class="text-nowrap">費用</th>
                            <th scope="col" class="text-nowrap">注意事項</th>
                        </tr>
                    </thead>
                    <tbody v-for="item in order" :key="item.docId" class="text-center" >
                        <tr>
                            <td>
                                <p class="text-danger" v-if="!item.orderStatus">尚未付款</p>
                                <p v-else>完成付款</p>
                            </td>
                            <td>
                                <table class="table mb-0">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>活動名稱</th>
                                            <th>全票</th>
                                            <th>學生票</th>
                                            <th>優待票</th>
                                        </tr>
                                    </thead>
                                    <tbody v-for="(event,index) in item.orderDetail" :key="event.id">
                                        <tr>
                                            <td>{{index+1}}</td>
                                            <td class="text-nowrap">{{event.title}}</td>
                                            <td>{{event.num.full}}</td>
                                            <td>{{event.num.student}}</td>
                                            <td>{{event.num.discount}}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                            <td>
                                {{item.total}}
                            </td>
                            <td>
                                <p class="text-danger" v-if="!item.orderStatus">
                                    請於入場前至各大超商付款取票
                                    <br>
                                    <span class="text-dark">票券編號: {{item.docId}}</span>
                                </p>
                                <p v-else>票券編號{{item.docId}}</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p class="text-danger">對於票券有任何疑問，請聯絡方格子劇場 <a href="tel:+886-91111111111">091111111111</a></p>
        </div>
        
        
    </div>
</template>

<script>
import {computed,onBeforeMount} from 'vue'
import {useStore} from 'vuex'
export default {
    name: 'MyTicket',
    setup(){
        const store = useStore()
        const order = computed(()=>store.getters.userOrder)

        onBeforeMount(()=>{
            const user = computed(()=>store.getters.user)
            store.dispatch('getOrder',user.value.uid)
        })
        return{
            order
        }
    }
}
</script>

<style lang="scss" scoped>
    p{
        margin: 0;
    }
</style>