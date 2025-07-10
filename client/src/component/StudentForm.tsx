import React, { useState } from "react";

const StudentForm = () => {
    const [form, setForm] = useState({ name: "", age: "", gender: "" });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
     const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

  
  };
    const validate = () => {
        let newErrors: {[key:string]:string}={}
        if (form.name.trim() === '') newErrors.name = "Họ tên không được để trống";
        if (form.age.trim() === '') newErrors.age = "Tuổi không được để trống";
         if (!form.gender.trim()) newErrors.gender = "Giới tính không được để trống";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
    }
      const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Form hợp lệ. Dữ liệu: " + JSON.stringify(form));
      setForm({ name: "", age: "", gender: "" });
      setErrors({});
    }
};
  
    return (
   <>
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-md mx-auto bg-white shadow rounded">
        <div>
            <label>Họ tên</label>
            <input type="text" 
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="border p-2 w-full"
            />
             <div>
            <label>Tuổi</label>
            <input type="text" 
                    name="age"
                    value={form.age}
                    onChange={handleChange}
                    className="border p-2 w-full"
            />
             {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </div>
         <div>
            <label>Giới tính</label>
             <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="">-- Chọn giới tính --</option>
          <option value="Nam">Nam</option>
          <option value="Nữ">Nữ</option>
        </select>
        {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
           
        </div>
           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Gửi
      </button>
        </div>
    </form>
   </>
  )
}

export default StudentForm