import { Grid2 as Grid } from "@mui/material";
import photo1 from "../../assets/229234.jpg";
import photo2 from "../../assets/40051.jpg";
import photo3 from "../../assets/640990.jpg";
import photo4 from "../../assets/640994.jpg";

export function GridDemo() {
    return <Grid spacing={6} container>
        <Grid size={{ xs: 6, lg: 4 }}>
            <img width={"100%"} src={photo1} alt="" />
        </Grid>
        <Grid size={{ xs: 6, lg: 8 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio veritatis minus blanditiis ullam temporibus dolor animi natus praesentium eos saepe provident esse maxime, aperiam sint adipisci dignissimos, atque facere earum.
        </Grid>
        <Grid size={{ xs: 4 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui sapiente architecto veniam deserunt omnis reprehenderit maiores porro illum! Maxime consequuntur dicta voluptatum necessitatibus omnis nostrum ea repellendus deleniti aut alias.
        </Grid>
        <Grid size={{ xs: 4 }}>
            <img width={"100%"} src={photo2} alt={""} />
        </Grid>
        <Grid size={{ xs: 4 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis officiis similique aperiam doloremque iusto eius non minus odit nesciunt rem, architecto animi, distinctio aliquam commodi, nisi a totam labore numquam.
        </Grid>
        <Grid container spacing={4} size={{ xs: 6, lg: 4 }}>
            <Grid>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio veritatis minus blanditiis ullam temporibus dolor animi natus praesentium eos saepe provident esse maxime, aperiam sint adipisci dignissimos, atque facere earum.
            </Grid>
            <Grid>
                <img width={"100%"} src={photo4} alt="" />
            </Grid>
            <Grid>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio veritatis minus blanditiis ullam temporibus dolor animi natus praesentium eos saepe provident esse maxime, aperiam sint adipisci dignissimos, atque facere earum.
            </Grid>
        </Grid>
        <Grid size={{ xs: 6, lg: 8 }}>
            <img width={"100%"} src={photo3} alt="" />
        </Grid>
    </Grid>
}