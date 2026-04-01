import AdminOrders from "./AdminOrders";
function OrderHistory() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="container py-5">
      <h2 className="mb-4">📦 Lịch sử đơn hàng</h2>
      {orders.map((o) => (
        <div key={o.id} className="card1 mb-4 shadow-sm">
          <div className="card1-body">
            <div className="d-flex justify-content-between mb-3">
              <h5 className="fw-bold m-0">🍰 Cake Shop</h5>
              <span
                className={`badge ${o.status === "approved" ? "bg-success" : "bg-warning text-dark"}`}
              >
                {o.status === "approved" ? "Đã gửi đơn" : "Đang chờ xử lý đơn"}
              </span>
            </div>
            <hr />

            {o.items.map((item) => (
              <div className="d-flex algin-items-center mb-3" key={item.id}>
                <img
                  src={item.img}
                  alt=""
                  style={{
                    width: "150px",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <div className="ms-3 flex-grow-1">
                  <h6 className="mb-2">{item.name}</h6>
                  <small className="text-muted">
                    Size: 19cm | SL: {item.quantity}
                  </small>
                </div>
                <div className="fw-bold price">
                  {item.price.toLocaleString("vi-VN")} đ
                </div>
              </div>
            ))}
            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="price fw-bold m-0">
                Tổng: {o.total.toLocaleString("vi-VN")} đ
              </h5>
              <div>
                <button className="btn btn-success me-2">✔ Đã nhận</button>

                <button className="btn btn-danger">❌ Xoá</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default OrderHistory;
