


class Cube
{
    constructor ()
    {
        // back left mid right top bottom

        this.x = 100
        this.y = 400

        this.faces = []

        let face = []
        let row = []

        for (const colour of ["red", "white", "yellow", "blue", "green", "orange"])
        {
            face = []
            for (let y=0; y<3; y++)
            {
                row = []
                for (let x=0; x<3; x++)
                {
                    row.push(colour.charAt(0))
                }
                face.push(row)
            }
            this.faces.push(face)
        }
    }

    draw()
    {
        let x = this.x
        let y = this.y
        const face_changes = [[SQUARE * 3, -SQUARE * 3],
                              [SQUARE * 3, -SQUARE * 3],
                              [SQUARE * 3, -SQUARE * 3],
                              [-SQUARE * 3, -SQUARE * 6],
                              [0, SQUARE * 3],

                              [0, 0]]
        for (let i=0; i<this.faces.length; i++)
        {
            const this_face = this.faces[i]
            const after_face = face_changes[i]
            console.log(this_face, after_face)
            for (const row of this_face)
            {
                for (const cell of row)
                {
                    let colour = COLOURS[cell]
                    fill(colour)
                    square(x, y, SQUARE)
                    x = x + SQUARE
                }
                y = y + SQUARE
                x = x - (SQUARE * 3)
            }
            x = x + after_face[0]
            y = y + after_face[1]
        }

    }
}




function setup()
{
  createCanvas(800, 800);
  my_cube = new Cube()
  SQUARE = 50
    COLOURS = {r:color(255, 0, 0),
    g:color(0, 255, 0),
    b:color(0, 0, 255),
    y:color(255, 255, 0),
    w:color(255, 255, 255),
    o:color(255, 125, 0)}
}

function draw()
{
  background(0);
  my_cube.draw();

}

function mouseDragged()
{

}