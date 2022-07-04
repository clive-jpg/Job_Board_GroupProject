//const { default: axios } = require("axios")

const getProfile = () => {
    axios
        .get(`/api/user/clive`)
        .then((res) => {
            console.log(res.data)
            //reloadListing(res.data)
            loadProfile(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

// AXIOS INSTANCES
//Render to browser
const loadProfile = (profile) => {
    // code here
    console.log("Loading user profile");
    $("#userProfile").html(profileTemplate({ profile: profile }));
  };

//Tempalate for user profile
let profileTemplate = Handlebars.compile(
    `
    {{#each profile}}   
    <section id="userprofile">
    <div class="container py-5">
        <div class="row">
            <div class="col">
                <nav aria-label="breadcrumb" class="bg-light rounded-3 p-3
                    mb-4">
                    <ol class="breadcrumb mb-0">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item active" aria-current="page">User
                            Profile</li>
                    </ol>
                </nav>
            </div>
        </div>

        <div class="row" id="userProfile">
            <div class="col-lg-4">
                <div class="card mb-4">
                    <div class="card-body text-center">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                            alt="avatar"
                            class="rounded-circle img-fluid" style="width:
                            110px;">
                        <br>
                        <h5 class="my-3"> {{first_name}} {{last_name}}</h5>
                        <p class="text-muted mb-1">Full Stack Developer</p>
                        <p class="text-muted mb-4">Hong Kong SAR</p>
                        <div class="d-flex justify-content-center mb-2">
                            <a href="/"><button type="button" class="btn
                                    btn-primary">Applied Jobs</button></a>
                                    <a href="/user/clive/saved"><button type="button" class="btn btn-outline-primary
                                ms-1">Saved Jobs</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-8">
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">First Name</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{first_name}}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Last Name</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{last_name}}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Email</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{email}}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Phone</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{phone}}</p>
                            </div>
                        </div>
                        <hr>
                        <div class="row">
                            <div class="col-sm-3">
                                <p class="mb-0">Address</p>
                            </div>
                            <div class="col-sm-9">
                                <p class="text-muted mb-0">{{address}}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row" id="progressbar">
                    <div class="col-lg">
                        <div class="card mb-4 mb-md-0">
                            <div class="card-body">
                                <p class="mb-4"><span class="text-primary
                                        font-italic me-1">Assigment</span>

                                </p>
                                <p class="mb-1" style="font-size: .77rem;">Web
                                    Design</p>
                                <div class="progress rounded">
                                    <div class="progress-bar" role="progressbar"
                                        style="width: 80%" aria-valuenow="80"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p class="mt-4 mb-1" style="font-size: .77rem;">Website
                                    Markup</p>
                                <div class="progress rounded">
                                    <div class="progress-bar" role="progressbar"
                                        style="width: 72%" aria-valuenow="72"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p class="mt-4 mb-1" style="font-size: .77rem;">One
                                    Page</p>
                                <div class="progress rounded">
                                    <div class="progress-bar" role="progressbar"
                                        style="width: 89%" aria-valuenow="89"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p class="mt-4 mb-1" style="font-size: .77rem;">Mobile
                                    Template</p>
                                <div class="progress rounded">
                                    <div class="progress-bar" role="progressbar"
                                        style="width: 55%" aria-valuenow="55"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <p class="mt-4 mb-1" style="font-size: .77rem;">Backend
                                    API</p>
                                <div class="progress rounded mb-2">
                                    <div class="progress-bar" role="progressbar"
                                        style="width: 66%" aria-valuenow="66"
                                        aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
{{/each}}
    `
)

  // Event listeners
  document.getElementById('getProf').addEventListener('click', getProfile);
