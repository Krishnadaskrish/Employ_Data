import React from 'react'

function EmployerEdit() {
    const { id } = useParams();
    const [user, setUser] = useState([]);

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        username: '',
        
      });

      const navigate = useNavigate(); 

      useEffect(() => {
          const UserData = async () => {
            try {
              const response = await Axios.get(`emoloyer/employee/${id}`);
              if (response.status === 200) {
                // Set the product data when it's fetched
                const { _id, name,email, username } = response.data.data;

                 setUserData({ id: _id, name,email,username });
              }
            } catch (error) {
              console.error('Error fetching product data:', error);
            }
          };
      
          UserData();
        }, [id]);



  return (
    <section>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="text-center">Edit Emoloyee</h2>
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <label htmlFor="Name">Name</label>
                                <input type="text" name="title" className="form-control" value={userData} onChange={handleChange} />

                                <label htmlFor="Category">name</label>
                                <input type="text" name="category" className="form-control" value={userData.name} onChange={handleChange} />

                                <label htmlFor="Price">Email</label>
                                <input type="text" name="price" className="form-control" value={userData.email} onChange={handleChange} />

                                <label htmlFor="Description">User name</label>
                                <input type="text" name="description" className="form-control" value={userData.username} onChange={handleChange} />

                               

                                <button type="submit" className="btn btn-success mt-4">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default EmployerEdit
