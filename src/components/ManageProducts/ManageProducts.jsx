import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteProductByID,
  editProductById,
  getProduct,
} from "../../service/service";
import {
  fetchedProducts,
  removeProduct,
  updateProduct,
} from "../AddProduct/ProductAction";
import { Modal, Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ManageProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getProduct()
      .then((res) => dispatch(fetchedProducts(res.data)))
      .catch((err) => console.log(err));
  }, [dispatch]);

  const products = useSelector((state) => state.productStore.products);

  const [editingProduct, setEditingProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({});
  const [showModal, setShowModal] = useState(false);

  // Open the modal for editing
  const handleEdit = (product) => {
    setEditingProduct(product.id);
    setUpdatedProduct(product); // Populate modal with selected product's data
    setShowModal(true); // Show modal
  };

  // Handle input changes in modal form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct((prev) => ({
      ...prev,
      [name]: name === "quantity" ? parseInt(value, 10) || 0 : value,
    }));
  };

  // Handle save in modal
  const handleSave = () => {
    if (!editingProduct) return;

    editProductById(editingProduct, updatedProduct)
      .then((res) => {
        dispatch(updateProduct(res.data));
        toast.success("Product details updated successfully!");
        setShowModal(false);
        setEditingProduct(null);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to update product. Please try again.");
      });
  };

  // Handle delete
  const handleDelete = (id) => {
    deleteProductByID(id)
      .then((res) => {
        dispatch(removeProduct(res.data));
        toast.success("Product removed successfully!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to remove product. Please try again.");
      });
  };

  return (
    <main className="flex-1 p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Manage Grocery Products</h2>
      </div>

      {/* Product Table */}
      <div className="container">
        <table className="table text-center table-bordered border-primary border-3 table-hover shadow-3xl">
          <thead className="table-primary">
            <tr>
              <th>Sr.No.</th>
              <th>Image URL</th>
              <th>Product Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Product Status</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.imageURL}</td>
                  <td>{product.productName}</td>
                  <td>{product.description}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    {product.quantity === 0 ? (
                      <span className="text-red-500 font-bold">
                        Out of Stock
                      </span>
                    ) : product.quantity < 5 ? (
                      <span className="text-yellow-500 font-bold">
                        Low Stock
                      </span>
                    ) : (
                      <span className="text-green-500 font-bold">In Stock</span>
                    )}
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => handleEdit(product)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <ToastContainer position="bottom-right" />

      {/* Bootstrap Modal for Editing */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Modal form */}
          <form>
            <div className="mb-3">
              <label className="form-label">Image URL</label>
              <input
                type="text"
                className="form-control"
                name="imageURL"
                value={updatedProduct.imageURL || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                name="productName"
                value={updatedProduct.productName || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Product Description</label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={updatedProduct.description || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Category</label>
              <input
                type="text"
                className="form-control"
                name="category"
                value={updatedProduct.category || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Price</label>
              <input
                type="text"
                className="form-control"
                name="price"
                value={updatedProduct.price || ""}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Quantity</label>
              <input
                type="number"
                className="form-control"
                name="quantity"
                value={updatedProduct.quantity || ""}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
};
