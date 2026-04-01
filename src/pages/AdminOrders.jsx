import { Button } from "bootstrap";
import { useState } from "react";
function AdminOrders() {
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || [],
  );
  const approve = (id) => {
    const updated = orders.map((o) =>
      o.id === id ? { ...o, status: "approved" } : o,
    );
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  const remove = (id) => {
    const updated = orders.filter((o) => o.id !== id);

    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };
  return (
    <>
      <div className="container py-5">
        <h2 className="mb-4">🛠 Quản lý đơn hàng</h2>

        {orders.map((o) => (
          <div key={o.id} className="card1 mb-4 shadow-sm">
            <div className="card1-body">
              <div className="d-flex justify-content-between mb-3">
                <h5 className="fw-bold m-0">🍰 Cake Shop</h5>
                <span
                  className={`badge ${
                    o.status === "approved"
                      ? "bg-success"
                      : "bg-warning text-dark"
                  }`}
                >
                  {o.status === "approved" ? "Đã duyệt" : "Chờ xử lý"}
                </span>
              </div>

              <hr />
              <p>
                <b>👤 Khách:</b> {o.name}
              </p>
              <p>
                <b>📞 SĐT:</b> {o.phone}
              </p>
              <p>
                <b>📍 Địa chỉ:</b> {o.address}
              </p>

              <hr />
              {o.items.map((item) => (
                <div key={item.id} className="d-flex align-items-center mb-3">
                  <img
                    src={item.img}
                    alt=""
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <div className="ms-3 flex-grow-1">
                    <h6 className="mb-1">{item.name}</h6>

                    <small className="text-muted">
                      Size: 19cm | SL: {item.quantity}
                    </small>
                  </div>
                </div>
              ))}

              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="price fw-bold m-0">
                  Tổng: {o.total.toLocaleString("vi-VN")} đ
                </h5>

                <div>
                  {o.status !== "approved" && (
                    <button
                      className="btn btn-success me-2"
                      onClick={() => approve(o.id)}
                    >
                      ✔ Duyệt
                    </button>
                  )}

                  <button
                    className="btn btn-danger"
                    onClick={() => remove(o.id)}
                  >
                    ❌ Xoá
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default AdminOrders;
