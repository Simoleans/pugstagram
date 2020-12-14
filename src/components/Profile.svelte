<script>
  export let nickname;
  export let name;

</script>
<style>
    .Profile-content {
      display: flex;
      align-items: center;
    }
    .Profile-avatar img {
      width: 42px;
      height: 42px;
      border-radius: 50%;
    }
    .Profile-info {
      margin: 0 0 0 0.5em;
    }
    .Profile-info h2 {
      font-size: 14px;
      color: black;
      margin: 0;
      padding: 0;
    }
    .Profile-info span {
      font-size: 12px;
      font-weight: normal;
    }
  </style>
<div class="Profile">
    <div class="Profile-content">
        <div class="Profile-avatar">
            <img src="https://scontent-mia3-2.xx.fbcdn.net/v/t1.0-9/18301081_10212289253890666_4322141994736506518_n.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=_B124jNpy8YAX9-gRJr&_nc_ht=scontent-mia3-2.xx&oh=3e85467854301f3762fdd49d468a66d8&oe=5FFC488A" alt="Fran Hernandez">
        </div>
        <div class="Profile-info">
            <h2>{nickname}</h2>
            <span>{name}</span>
        </div>
    </div>
</div>