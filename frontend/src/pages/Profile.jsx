// import React from "react";
// import { motion } from "framer-motion";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { User, Mail, Save, Camera } from "lucide-react";
// import { useAuth } from "../contexts/AuthContext";
// import Button from "../components/ui/Button";
// import Input from "../components/ui/Input";

// const schema = yup.object({
//   firstName: yup
//     .string()
//     .required("First name is required")
//     .min(2, "First name must be at least 2 characters"),
//   lastName: yup
//     .string()
//     .required("Last name is required")
//     .min(2, "Last name must be at least 2 characters"),
//   email: yup.string().email("Invalid email").required("Email is required"),
// });

// const Profile = () => {
//   const { user, updateProfile, loading } = useAuth();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       firstName: user?.firstName || "",
//       lastName: user?.lastName || "",
//       email: user?.email || "",
//     },
//   });

//   const onSubmit = async (data) => {
//     await updateProfile(data);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6 }}
//       className=" mx-auto space-y-6"
//     >
//       {/* Header */}
//       <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-200/50 p-6">
//         <h1 className="text-3xl font-bold text-gray-900 mb-2">
//           Profile Settings
//         </h1>
//         <p className="text-gray-600">
//           Manage your account information and preferences
//         </p>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         {/* Profile Picture */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.1 }}
//           className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/50 p-6"
//         >
//           <h2 className="text-xl font-semibold text-gray-900 mb-6">
//             Profile Picture
//           </h2>
//           <div className="text-center">
//             <div className="relative inline-block">
//               <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
//                 <span className="text-white text-3xl font-bold">
//                   {user?.firstName?.charAt(0)}
//                   {user?.lastName?.charAt(0)}
//                 </span>
//               </div>
//               <button className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full shadow-lg border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200">
//                 <Camera className="w-5 h-5 text-gray-600" />
//               </button>
//             </div>
//             <Button variant="outline" size="small" className="mt-4">
//               Change Picture
//             </Button>
//           </div>
//         </motion.div>

//         {/* Profile Form */}
//         <motion.div
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="lg:col-span-2 bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/50 p-6"
//         >
//           <h2 className="text-xl font-semibold text-gray-900 mb-6">
//             Personal Information
//           </h2>

//           <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <Input
//                 {...register("firstName")}
//                 label="First Name"
//                 placeholder="Enter your first name"
//                 icon={User}
//                 error={errors.firstName?.message}
//               />
//               <Input
//                 {...register("lastName")}
//                 label="Last Name"
//                 placeholder="Enter your last name"
//                 error={errors.lastName?.message}
//               />
//             </div>

//             <Input
//               {...register("email")}
//               type="email"
//               label="Email Address"
//               placeholder="Enter your email"
//               icon={Mail}
//               error={errors.email?.message}
//             />

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Role
//                 </label>
//                 <div className="px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 capitalize">
//                   {user?.role}
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Member Since
//                 </label>
//                 <div className="px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700">
//                   {new Date(user?.createdAt).toLocaleDateString()}
//                 </div>
//               </div>
//             </div>

//             <div className="flex justify-end">
//               <Button type="submit" loading={loading} className="group">
//                 <Save className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform duration-200" />
//                 Save Changes
//               </Button>
//             </div>
//           </form>
//         </motion.div>
//       </div>

//       {/* Account Statistics */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/50 p-6"
//       >
//         <h2 className="text-xl font-semibold text-gray-900 mb-6">
//           Account Statistics
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
//             <div className="text-2xl font-bold text-blue-600 mb-1">15</div>
//             <div className="text-sm text-blue-800">Total Logins</div>
//           </div>
//           <div className="text-center p-4 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100">
//             <div className="text-2xl font-bold text-emerald-600 mb-1">8</div>
//             <div className="text-sm text-emerald-800">Profile Updates</div>
//           </div>
//           <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100">
//             <div className="text-2xl font-bold text-purple-600 mb-1">
//               {user?.lastLogin
//                 ? new Date(user.lastLogin).toLocaleDateString()
//                 : "Never"}
//             </div>
//             <div className="text-sm text-purple-800">Last Login</div>
//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Profile;

import React from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { User, Mail, Save, Camera } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const schema = yup.object({
  firstName: yup.string().required("First name is required").min(2),
  lastName: yup.string().required("Last name is required").min(2),
  email: yup.string().email("Invalid email").required("Email is required"),
});

const Profile = () => {
  const { user, updateProfile, loading } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
    },
  });

  const onSubmit = async (data) => await updateProfile(data);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8  mx-3  px-4 sm:px-6 lg:px-8"
    >
      {/* Header */}
      <div className="bg-gray-50  space-y-6 p-6">
        <section className="space-y-6 backdrop-blur-lg  rounded-2xl shadow-lg border border-gray-200/50 p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Profile Settings
          </h1>
          <p className="text-gray-600">
            Manage your account information and preferences
          </p>
        </section>

        {/* Profile Info */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Picture */}
          <motion.article
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/50 p-6 flex flex-col items-center"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Profile Picture
            </h2>
            <div className="relative w-32 h-32 mb-4">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                {user?.firstName?.charAt(0)}
                {user?.lastName?.charAt(0)}
              </div>
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-white rounded-full shadow-lg border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200">
                <Camera className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <Button variant="outline" size="small">
              Change Picture
            </Button>
          </motion.article>

          {/* Profile Form */}
          <motion.article
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/50 p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Personal Information
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  {...register("firstName")}
                  label="First Name"
                  placeholder="Enter your first name"
                  icon={User}
                  error={errors.firstName?.message}
                />
                <Input
                  {...register("lastName")}
                  label="Last Name"
                  placeholder="Enter your last name"
                  error={errors.lastName?.message}
                />
              </div>
              <Input
                {...register("email")}
                type="email"
                label="Email Address"
                placeholder="Enter your email"
                icon={Mail}
                error={errors.email?.message}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Role
                  </label>
                  <div className="px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 capitalize">
                    {user?.role}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Member Since
                  </label>
                  <div className="px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 text-gray-700">
                    {new Date(user?.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Button
                  type="submit"
                  loading={loading}
                  className="group flex items-center gap-2"
                >
                  <Save className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                  Save Changes
                </Button>
              </div>
            </form>
          </motion.article>
        </section>

        {/* Account Statistics */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/50 p-6"
        >
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Account Statistics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="text-2xl font-bold text-blue-600 mb-1">15</div>
              <div className="text-sm text-blue-800">Total Logins</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-emerald-50 to-emerald-100">
              <div className="text-2xl font-bold text-emerald-600 mb-1">8</div>
              <div className="text-sm text-emerald-800">Profile Updates</div>
            </div>
            <div className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="text-2xl font-bold text-purple-600 mb-1">
                {user?.lastLogin
                  ? new Date(user.lastLogin).toLocaleDateString()
                  : "Never"}
              </div>
              <div className="text-sm text-purple-800">Last Login</div>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
};

export default Profile;
