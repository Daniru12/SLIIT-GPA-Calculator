import React, { useState } from "react";

function GpaCalculator() {
    const [modules, setModules] = useState([]);
    const [moduleName, setModuleName] = useState("");
    const [credits, setCredits] = useState("");
    const [grade, setGrade] = useState("A");

    const calculateGPA = (grade) => {
        const gradePoints = {
            "A+": 4.0,
            A: 4.0,
            "A-": 3.7,
            "B+": 3.3,
            B: 3.0,
            "B-": 2.7,
            "C+": 2.3,
            C: 2.0,
            "C-": 1.7,
            "D+": 1.3,
            D: 1.0,
            E: 0.0,
        };
        return gradePoints[grade] || 0;
    };

    const addModule = () => {
        if (moduleName.trim() && credits && grade) {
            const creditValue = Number(credits);
            if (creditValue > 0 && creditValue <= 6) {
                setModules([
                    ...modules,
                    {
                        id: Date.now(),
                        name: moduleName.trim(),
                        credits: creditValue,
                        grade,
                    },
                ]);
                setModuleName("");
            }
        }
    };

    const removeModule = (id) => {
        setModules(modules.filter((module) => module.id !== id));
    };

    const calculateCumulativeGPA = () => {
        if (modules.length === 0) return "0.00";
        const totalPoints = modules.reduce(
            (sum, module) => sum + calculateGPA(module.grade) * module.credits,
            0
        );
        const totalCredits = modules.reduce(
            (sum, module) => sum + module.credits,
            0
        );
        return (totalPoints / totalCredits).toFixed(2);
    };

    const totalCredits = modules.reduce((sum, module) => sum + module.credits, 0);
    const cumulativeGPA = calculateCumulativeGPA();

    return (
        <div className="min-h-screen p-8 text-white bg-gradient-to-br from-black via-purple-950 to-black">
            <div className="mx-auto max-w-7xl">
                <header className="mb-12 text-center">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <img src="https://i.postimg.cc/2ycFb0v7/SLIIT-Logo-Crest.png" alt="SLIIT Logo Crest" width="50" height="auto" />

                        <h1 className="text-3xl font-bold tracking-tight">SLIIT GPA Calculator</h1>
                    </div>
                    <p className="text-gray-400">
                        Calculate your CGPA easily using this calculator. Add your module
                        names, credits, and grades to get your current CGPA.
                    </p>
                </header>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {/* Calculator Section */}
                    <div className="bg-[#11071F]  backdrop-blur-sm border border-purple-500/20 shadow-xl glow-border w-full p-4 sm:p-6 rounded-xl">
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 mb-6">
                                <h2 className="text-xl font-semibold">GPA Calculator</h2>
                            </div>
                            <div class="grid grid-cols-[1.5fr,70px,70px,40px] sm:grid-cols-[1fr,100px,105px,40px] gap-2 sm:gap-4 mb-3">
                                <div class="text-xs ml-1 sm:text-sm font-semibold text-purple-300 text-center">Module Name</div>
                                <div class="text-xs sm:text-sm font-semibold text-purple-300 text-center">Credits</div>
                                <div class="text-xs sm:text-sm font-semibold text-purple-300 text-center">Grade</div>
                            </div>
                            <div className="grid grid-cols-12 gap-4">
    {/* Module Name Input */}
    <div className="col-span-6 sm:col-span-5 md:col-span-6 lg:col-span-6">
        <input
            type="text"
            placeholder="Module name"
            className="w-full bg-[#1A0B2E] border border-purple-900/50 rounded-md px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            value={moduleName}
            onChange={(e) => setModuleName(e.target.value)}
            maxLength={50}
        />
    </div>

    {/* Credits Input */}
    <div className="col-span-3 sm:col-span-2 md:col-span-3 lg:col-span-3">
        <input
            type="text" // Allows full control of behavior
            className="w-full bg-[#1A0B2E] border border-purple-900/50 rounded-md px-4 py-2 text-white focus:outline-none focus:border-purple-500"
            value={credits}
            onKeyPress={(e) => {
                // Allow only numeric characters
                if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                }
            }}
            onChange={(e) => {
                // Parse the input value and ensure it's a number within the valid range
                const value = parseInt(e.target.value, 10);
                if (!isNaN(value) && value >= 1 && value <= 6) {
                    setCredits(value);
                } else if (e.target.value === "") {
                    setCredits("");
                }
            }}
            placeholder="Enter credits"
        />
    </div>

    {/* Grade Dropdown */}
    <div className="col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-2">
        <select
            className="w-full bg-[#1A0B2E] border border-purple-900/50 rounded-md px-4 py-2 text-white focus:outline-none focus:border-purple-500"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
        >
            {["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "E"].map((g) => (
                <option key={g} value={g}>{g}</option>
            ))}
        </select>
    </div>

    {/* Add Module Button */}
    <div className="col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
        <button
            onClick={addModule}
            className="flex items-center justify-center w-full h-full text-red-400 transition-colors rounded-md bg-red-500/20 hover:bg-red-500/30 hover:text-red-300"
            disabled={!moduleName.trim() || !credits}
        >
            +
        </button>
    </div>
</div>


                            <button
                                onClick={addModule}
                                className="flex items-center justify-center w-full gap-2 py-2 text-purple-400 transition-colors rounded-md bg-purple-600/20 hover:bg-purple-600/30"
                                disabled={!moduleName.trim() || !credits}
                            >
                                <span className="text-lg">+</span> Add Module
                            </button>

                            {modules.map((module) => (
                                <div key={module.id} className="grid items-center grid-cols-12 gap-4 py-2 border-b border-purple-900/20">
                                    <div className="col-span-6 truncate">{module.name}</div>
                                    <div className="col-span-3 text-center">{module.credits}</div>
                                    <div className="col-span-2 text-center">{module.grade}</div>
                                    <div className="col-span-1">
                                        <button
                                            onClick={() => removeModule(module.id)}
                                            className="w-full text-red-400 transition-colors rounded-md bg-red-500/20 hover:bg-red-500/30"
                                        >
                                            -
                                        </button>
                                    </div>
                                </div>
                            ))}

                            <div className="mt-8 bg-[#1A0B2E] rounded-xl p-6 border border-purple-500/20 shadow-xl glow-border">
                                <h3 className="mb-4 text-lg font-semibold">Summary</h3>
                                <div className="grid grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <p className="mb-1 text-sm text-gray-400">Total Modules</p>
                                        <p className="text-xl">{modules.length}</p>
                                    </div>
                                    <div>
                                        <p className="mb-1 text-sm text-gray-400">Total Credits</p>
                                        <p className="text-xl">{totalCredits}</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="mb-1 text-sm text-gray-400">Cumulative GPA</p>
                                    <p className="text-4xl font-bold text-green-400">
                                        {cumulativeGPA}
                                    </p>
                                    {Number(cumulativeGPA) >= 3.7 && (
                                        <p className="mt-2 text-sm text-purple-400">Dean's List</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Grading Scale Section */}
                    <div className="bg-[#11071F] rounded-xl p-6 shadow-xl border border-purple-500/20  glow-border">
                        <div className="flex items-center gap-2 mb-6">
                            <h2 className="text-xl font-semibold">Grading Scale</h2>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="text-sm font-semibold text-purple-400">GRADE</div>
                            <div className="text-sm font-semibold text-purple-400">GPA</div>
                            <div className="text-sm font-semibold text-purple-400">MARKS</div>
                            {[
                                ["A+", "4.0", "90-100"],
                                ["A", "4.0", "80-89"],
                                ["A-", "3.7", "75-79"],
                                ["B+", "3.3", "70-74"],
                                ["B", "3.0", "65-69"],
                                ["B-", "2.7", "60-64"],
                                ["C+", "2.3", "55-59"],
                                ["C", "2.0", "45-54"],
                                ["C-", "1.7", "40-44"],
                                ["D+", "1.3", "35-39"],
                                ["D", "1.0", "30-34"],
                                ["E", "0.0", "0-29"],
                            ].map(([grade, gpa, marks]) => (
                                <React.Fragment key={grade}>
                                    <div className="py-2">{grade}</div>
                                    <div className="py-2">{gpa}</div>
                                    <div className="py-2">{marks}</div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
                <footer class="text-center mt-10 sm:mt-12 mb-3 sm:mb-0 text-purple-400/60 text-sm"><a href="https://anupa.lk">© 2025 SLIIT GPA Calculator. Developed by Daniru Punsith.</a></footer>
            </div>
        </div>
    );
}

export default GpaCalculator;