import React from 'react'

const UpdateAdminModal = ({ modalData, handleInputChange, handleUpdate, setIsModalOpen, modalEntity }) => {
  return (
  <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
            <form
              onSubmit={(e) => {
                e.preventDefault(); // Prevent default behavior
                if (e.target.checkValidity()) {
                  handleUpdate(modalEntity, modalData, "admin");
                } else {
                  console.warn("Form validation failed");
                }
              }}
              className="bg-white p-6 rounded-lg shadow-lg w-96"
            >
              <h2 className="text-xl font-bold mb-4">Update Admin</h2>
              {/* Input for admin_name */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Admin Name
                </label>
                <input
                  required
                  type="text"
                  name="admin_name"
                  value={modalData.admin_name || ""}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              {/* Input for admin_password */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Admin Password
                </label>
                <input
                  required
                  type="password"
                  name="admin_password"
                  value={modalData.admin_password || ""}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              {/* Input for admin_phone */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Admin Phone
                </label>
                <input
                  required
                  type="text"
                  name="admin_phone"
                  value={modalData.admin_phone || ""}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                />
              </div>
              {/* Select for admin_role */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Admin Role
                </label>
                <select
                  name="admin_role"
                  value={modalData.admin_role || ""}
                  onChange={handleInputChange}
                  className="w-full border rounded px-3 py-2"
                  required
                >
                  <option value="">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  type="submit"
                >
                  Update Admin
                </button>
              </div>
            </form>
          </div>
  )
}

export default UpdateAdminModal
