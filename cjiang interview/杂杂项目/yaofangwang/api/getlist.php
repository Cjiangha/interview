
<?php
// <!-- 分页功能 -->
    // 需求：接受数据，查询，制作成字符串，echo给前端
    include 'conn.php';
   
    $page = isset($_GET['page'])?$_GET['page']:'1'; //当前页数
    $num = isset($_GET['num'])?$_GET['num']:'8';//条数

    //1、 写sql语句
    $index = ($page - 1) *$num;    //index为当前有多少条数了。。
    // $index,$num =>下标，多少条，相应的index为 0,8,16,24,32,一
   
    $sql1 = "select * from drug limit $index,$num";
    $sql2 = 'SELECT * FROM drug';

    //2、执行语句
    $res = $conn->query($sql1);
    $res2 = $conn->query($sql2);//查询到所有数据

    //3、提取数据
    $arr = $res ->fetch_all(MYSQLI_ASSOC);

    //拿出来的是一个对象
    $data = array(
        // 关于计算总页数，条数共34条,后端拿到总数量和数量，可以进行页数的计算
        'total' =>  $res2->num_rows,//总量,num_rows为多少条记录
        'data' => $arr,//查询当前页的所有数据
        'page'=> $page,//当前页数
        'num' =>$num//条数
    );

    //4、把对象转成字符串
    echo json_encode($data,JSON_UNESCAPED_UNICODE);

    $conn->set_charset('utf-8');
?>