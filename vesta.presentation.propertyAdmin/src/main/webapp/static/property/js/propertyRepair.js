/**
 * Created by liudongxin on 2016/2/19.
 */
<!-- 报修信息删除 -->
function deleteRepair(id){
    myvalue = confirm("确定要删除吗?");
    if (myvalue == true) {
        $.ajax({
            url: "/property/removeRepair",
            type: "post",
            async: "false",
            dataType: "json",
            data: {
                "repairId": id,
            },
            success: function (json) {
                <!-- 获取返回代码 -->
                var code = json.code;
                if (code != 0) {
                    var errorMessage = json.msg;
                    alert(errorMessage);
                } else {
                    <!-- 获取返回数据 -->
                    var data = json.data;
                    if (data == "1") {
                        // 此信息删除失败!
                        alert("信息删除失败,请刷新重试...");
                    }
                    if (data == "2") {
                        // 此信息不存在!
                        alert("信息已被删除,请刷新...");
                    }
                    window.location.href = "../property/workOrderManagement.html?pageIndex="+pages+"&project="+project+
                        "&userName="+userName+"&startDate="+startDate+"&endDate="+endDate+"&status="+status;
                }
            },
        });
    }
}
