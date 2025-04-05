export const simulateCsvUpload = (file) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          failed_count: 2,
          failed_items: [
            {
              data: {
                AltEmail: "",
                City: "Skinnerstad",
                ClientId: "3",
                Company: "Marks-Stevens",
                Country: "Barbados",
                Email: "sampson.powell.com",
                FirstName: "Vane",
                LastName: "Sampson",
                Mobile: "57 3506789123",
                Phone: "57 3506789123",
                Role: "HR",
                Source: "Referral",
                Website: "www.powell.com"
              },
              errors: ["Invalid or empty email format"]
            },
            {
              data: {
                AltEmail: "",
                City: "Reidmouth",
                ClientId: "3",
                Company: "Evans and Sons",
                Country: "Montenegro",
                Email: "k@@wells-davis.biz",
                FirstName: "Jasmi",
                LastName: "Holloway",
                Mobile: "57 3152345678",
                Phone: "57 3152345678",
                Role: "CTO",
                Source: "Event",
                Website: "www.wells-davis.biz"
              },
              errors: ["Invalid or empty email format"]
            }
          ],
          message: "10 contacts uploaded successfully!",
          success_count: 10
        });
      }, 1500);
    });
  };
  