import React from 'react'

const AddAdminModal = ({ modalData, handleInputChange, handleSubmit, setIsModalOpen }) => {
  return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add New Admin</h2>
            {/* Admin Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Admin Name</label>
              <input
                required
                type="text"
                name="admin_name"
                value={modalData.admin_name || ""}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            {/* Admin Password */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Admin Password</label>
              <input
                required
                type="password"
                name="admin_password"
                value={modalData.admin_password || ""}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            {/* Admin Phone */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Admin Phone</label>
              <input
                required
                type="number"
                name="admin_phone"
                value={modalData.admin_phone || ""}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            {/* Admin Role */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Admin Role</label>
              <select
                name="admin_role"
                value={modalData.admin_role || "user"}
                onChange={handleInputChange}
                className="w-full border rounded px-3 py-2"
              >
                <option value="admin">Admin</option>
                <option value="user">User</option>
              </select>
            </div>
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add Admin
              </button>
            </div>
          </form>
        </div>
      
  )
}

export default AddAdminModal
