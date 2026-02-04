import User from "./Users";
export const data = User.map((item)=>{
    return {
        id: item.id,
        name: item.firstName+" "+item.maidenName+" "+item.lastName,
        username: item.username,
        email: item.email,
        phone: item.phone,
        gender: item.gender,
        birthDate: item.birthDate,
        age: item.age,
        bloodGroup: item.bloodGroup,
    }
})
export const columns = [
    {
        accessorKey: "id",
        header: "ID",
        size: 50,
        cell: info => info.getValue(),
    },
    {
        accessorKey: "name",
        header: "Name",
        size: 200,
        cell: info => info.getValue(),
    },
    {
        accessorKey: "username",
        header: "Username",
        size: 120,
        cell: info => info.getValue(),
    },
    {
        accessorKey: "email",
        header: "Email",
        size: 200,
        cell: info => info.getValue(),
    },
    {
        accessorKey: "phone",
        header: "Phone",
        size: 200,
        cell: info => info.getValue(),
    },
    {
        accessorKey: "gender",
        header: "Gender",
        size: 100,
        cell: info => info.getValue(),
    },
    {
        accessorKey: "birthDate",
        header: "Birth Date",
        size: 120,
        cell: info => info.getValue(),
    },
    {
        accessorKey: "age",
        header: "Age",
        size: 70,
        cell: info => info.getValue(),
    },
    {
        accessorKey: "bloodGroup",
        header: "Blood Group",
        size: 120,
        cell: info => info.getValue(),
    }
]